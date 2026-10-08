from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    # Application settings
    APP_NAME: str = "Finance Tracker API"
    VERSION: str = "1.0.0"
    DEBUG: bool = False

    # Database settings
    DATABASE_URL: str = "postgresql://user:password@localhost:5432/finance_tracker"

    # Security settings
    SECRET_KEY: str = "your-secret-key-change-this-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # CORS settings - stored as string, parsed to list via helper
    BACKEND_CORS_ORIGINS: str = "http://localhost:3000,http://localhost:8080"

    class Config:
        env_file = ".env"
        case_sensitive = True


def get_cors_origins() -> list[str]:
    """Parse BACKEND_CORS_ORIGINS string into a list."""
    return [origin.strip() for origin in settings.BACKEND_CORS_ORIGINS.split(",") if origin.strip()]


settings = Settings()
