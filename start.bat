@echo off
title Haseeb Ahmad - DevOps Portfolio
echo ========================================================
echo   Starting Haseeb Ahmad - DevOps Portfolio Dev Server
echo ========================================================
echo.
echo [1/2] Opening browser at http://localhost:3000 ...
timeout /t 2 /nobreak >nul
start http://localhost:3000
echo [2/2] Running Next.js server...
echo.
call npm run dev
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Server encountered an error.
    pause
)
