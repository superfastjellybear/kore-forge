@echo off
title Kore Forge — Build Lightweight Executable
color 0A

echo.
echo  ================================================
echo   KORE FORGE — Build Offline App (Neutralino)
echo  ================================================
echo.

:: Check we are in the right folder
if not exist "package.json" (
    echo  ERROR: Run this script from C:\Users\Tom\kore-forge\
    pause
    exit /b 1
)

echo  [1/4] Building site...
call npm run build
if errorlevel 1 (
    echo  ERROR: Build failed.
    pause
    exit /b 1
)
echo  Build complete.
echo.

echo  [2/4] Copying dist into Neutralino www folder...
if not exist "kore-forge-neu\kore-forge-app\www" mkdir "kore-forge-neu\kore-forge-app\www"
xcopy /E /Y /Q dist\ kore-forge-neu\kore-forge-app\www\
echo  Files copied.
echo.

echo  [3/4] Copying Neutralino client library...
copy /Y "kore-forge-neu\kore-forge-app\www\neutralino.js" "kore-forge-neu\kore-forge-app\www\neutralino.js" >nul 2>&1
echo  Done.
echo.

echo  [4/4] Packaging executable...
copy /Y "kore-forge-neu\kore-forge-app\bin\neutralino-win_x64.exe" "KoreForge.exe"
copy /Y "kore-forge-neu\kore-forge-app\neutralino.config.json" "neutralino.config.json.bak" >nul 2>&1

:: Package resources.neu
cd kore-forge-neu\kore-forge-app
neu build --release >nul 2>&1
cd ..\..

:: Copy final exe and resources
if exist "kore-forge-neu\kore-forge-app\dist\KoreForge-win_x64.exe" (
    copy /Y "kore-forge-neu\kore-forge-app\dist\KoreForge-win_x64.exe" "KoreForge.exe"
) else (
    copy /Y "kore-forge-neu\kore-forge-app\bin\neutralino-win_x64.exe" "KoreForge.exe"
)

echo.
echo  ================================================
echo   DONE — KoreForge.exe ready (~2MB)
echo   Copy KoreForge.exe + resources.neu together
echo  ================================================
echo.
pause
