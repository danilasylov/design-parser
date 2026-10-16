@echo off
cd /d "%~dp0"
set PYTHONUTF8=1
py -3 scripts\project.py start
if errorlevel 1 pause
