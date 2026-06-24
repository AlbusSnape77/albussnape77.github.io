@echo off
chcp 65001 >nul
cd /d "%~dp0"
where python >nul 2>nul
if %errorlevel%==0 (
  python translate.py
) else (
  C:\Python314\python.exe translate.py
)
pause
