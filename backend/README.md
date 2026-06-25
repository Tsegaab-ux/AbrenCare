Backend README
===============

Quick instructions for running the backend locally using the bundled virtual environment.

Prerequisites
- Python installed on your system.
- The project's virtual environment is at `env/` (created already in this repo).

Activate the virtual environment (Windows)
- PowerShell:
  ```powershell
  .\env\Scripts\Activate.ps1
  ```
- Command Prompt (cmd.exe):
  ```cmd
  .\env\Scripts\activate.bat
  ```

If you prefer not to activate, you can run the venv Python directly by referencing `env\Scripts\python.exe`.

Install dependencies
- If the repo provides a `requirements.txt` in future, install with:
  ```powershell
  .\env\Scripts\python.exe -m pip install -r requirements.txt
  ```
- Otherwise install needed packages (example):
  ```powershell
  .\env\Scripts\python.exe -m pip install -U pip
  .\env\Scripts\python.exe -m pip install django djangorestframework djangorestframework-simplejwt
  ```

Run the development server (from project root)
```powershell
.\env\Scripts\python.exe backend\manage.py runserver
```

Run tests (from project root)
```powershell
.\env\Scripts\python.exe backend\manage.py test
```

Notes
- If you get ModuleNotFoundError for a package, make sure you're using the `env` Python shown above.
- The commands above assume you're on Windows and the repo root contains the `env` folder. Adjust paths for other platforms.
