@echo off
setlocal

for %%I in ("%~dp0..") do set "REPO_ROOT=%%~fI"
set "VENV_DIR=%REPO_ROOT%\.venv"
set "VENV_PYTHON=%VENV_DIR%\Scripts\python.exe"
set "REQUIREMENTS=%~dp0requirements.txt"
set "CODEX_PYTHON=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"

if not exist "%VENV_PYTHON%" (
  echo Creating local Python environment at .venv...
  where py >nul 2>nul
  if not errorlevel 1 (
    py -3 -m venv "%VENV_DIR%"
  ) else (
    where python >nul 2>nul
    if not errorlevel 1 (
      python -m venv "%VENV_DIR%"
    ) else (
      where python3 >nul 2>nul
      if not errorlevel 1 (
        python3 -m venv "%VENV_DIR%"
      ) else if exist "%CODEX_PYTHON%" (
        "%CODEX_PYTHON%" -m venv "%VENV_DIR%"
      ) else (
        goto :missing_python
      )
    )
  )
  if errorlevel 1 goto :error
)

echo Installing photo workflow requirements...
"%VENV_PYTHON%" -m pip install --disable-pip-version-check -r "%REQUIREMENTS%"
if errorlevel 1 goto :error

echo Setup complete.
exit /b 0

:missing_python
echo.
echo Python 3 was not found. Install Python 3, then run this file again.
exit /b 1

:error
echo.
echo Setup failed. Review the message above, then run this file again.
exit /b 1
