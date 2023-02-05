@ECHO OFF
CLS

REM Run NeoBook/VisualNeoWin to compile the publication
"C:\Program Files (x86)\VisualNeoWin\VisualNeoWin.exe" /C "%~d0%~p0RamRipper.pub"

REM Run the compiled publication
REM "C:\Users\jose\Documents\NeoPlugins\npNots\Samples\Notifications.exe"

REM Run NeoBook with the publication opened
REM "C:\Program Files (x86)\VisualNeoWin\VisualNeoWin.exe" "%~d0%~p0RamRipper.pub"
