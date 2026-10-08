#!/bin/bash
# Exit on error
set -e

# Install Python dependencies
pip install --no-cache-dir -r requirements.txt

# Create database tables if database is reachable
python -c "
from app.core.database import engine, Base
try:
    Base.metadata.create_all(bind=engine)
    print('Database tables created successfully')
except Exception as e:
    print(f'Warning: Could not create database tables: {e}')
    print('This is OK during build - tables will be created at runtime')
"

echo "Build completed successfully"