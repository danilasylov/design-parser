@echo off
cd /d "%~dp0"
set PYTHONUTF8=1
py -3 scripts\project.py setup
if errorlevel 1 (pause & exit /b 1)
echo Setup complete. Run start-windows.cmd
pause
