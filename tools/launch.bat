@echo off
setlocal

for %%I in ("%~dp0..") do set "REPO_ROOT=%%~fI"
set "VENV_PYTHON=%REPO_ROOT%\.venv\Scripts\python.exe"

if not exist "%VENV_PYTHON%" (
  call "%~dp0setup.bat"
  if errorlevel 1 exit /b 1
)

pushd "%REPO_ROOT%"
"%VENV_PYTHON%" "%~dp0generate-image-variants.py" --pause %*
set "RESULT=%ERRORLEVEL%"
popd

if not "%RESULT%"=="0" (
  echo.
  echo Photo optimization failed.
  pause
  exit /b %RESULT%
)

exit /b 0
