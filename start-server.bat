@echo off
echo Starting Tủ Sách Online Server...
echo.
echo Choose your server:
echo 1. Python Server (Port 8000)
echo 2. Node.js Server (Port 3000) - requires Node.js
echo.
set /p choice="Enter your choice (1 or 2): "

if "%choice%"=="1" (
    echo Starting Python server...
    python server.py
) else if "%choice%"=="2" (
    echo Starting Node.js server...
    node server.js
) else (
    echo Invalid choice. Starting Python server by default...
    python server.py
)

pause
