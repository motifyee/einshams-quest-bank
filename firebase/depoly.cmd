@REM you must be in deploy folder to run this script
@REM cd deploy

rd public /s

xcopy ..\dist public /E/H/I/C
@REM xcopy ..\assets\audio public\assets\audio /E/H/I/C



@REM npm i -g firebase-tools
@REM firebase init
@REM firebase use fir-computers-ip
firebase deploy --only hosting:ein-shams