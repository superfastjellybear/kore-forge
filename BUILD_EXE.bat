@echo off
title Kore Forge — Build Executable
color 0A

echo.
echo  ================================================
echo   KORE FORGE — Build Offline Executable
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
    echo  ERROR: Build failed. Check errors above.
    pause
    exit /b 1
)
echo  Build complete.
echo.

echo  [2/4] Copying assets to dist...
copy "public\midnight-focus.mp3" "dist\midnight-focus.mp3" >nul 2>&1
copy "public\videointro.mp4" "dist\videointro.mp4" >nul 2>&1
echo  Assets copied.
echo.

echo  [3/4] Installing pkg if needed...
call pkg --version >nul 2>&1
if errorlevel 1 (
    echo  Installing pkg...
    call npm install -g pkg
)
echo  pkg ready.
echo.

echo  [4/4] Building KoreForge.exe...
if not exist "kore-forge-desktop" mkdir kore-forge-desktop
copy /Y dist kore-forge-desktop\dist >nul 2>&1
xcopy /E /Y /Q dist kore-forge-desktop\dist\ >nul 2>&1

cd kore-forge-desktop
call pkg . --target node18-win-x64 --output ..\KoreForge.exe
cd ..

echo.
echo  ================================================
echo   DONE — KoreForge.exe is ready
echo   Double-click it to launch the presentation
echo  ================================================
echo.
pause
