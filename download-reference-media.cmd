@echo off
cd /d "%~dp0"
set PYTHONUTF8=1
py -3 scripts\install_reference_media.py
if errorlevel 1 (pause & exit /b 1)
echo Reference videos and posters are ready.
pause
