How to Build the Android App
===============

[[android studio image]]

What You'll need:

1. A PC or Mac with NodeJS, Java (JDK7) and Android Studio installed.
2. An Android (4.0+) device and USB cable for testing.
3. Basic understanding of a command line interface (you can navigate between folders).

CORPORATE FIREWALLS: Note that the steps below may not work behind a corporate firewall, you may need extra steps to set up internet access via a corporate proxy.

You've already installed [NodeJS](http://nodejs.org) right? If its a old version (not 0.12+) you might want to download the latest and re-install it. 

Ok, next you will need Java JDK 7 Installed and Android Studio. You can get them on the following links:

JDK7: [http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html]) -> Remember x86=32bit, x64=64bit

Android Studio: [https://developer.android.com/sdk/index.html](https://developer.android.com/sdk/index.html)

BEWARE: after installing/running Android Studio, it will want to dowload the latest Android SDKs (the bits of functionality that enable your PC to talk to the phone hardware), this can take anywhere from 10 minutes and up to a couple of hours over a slow internet connection.

Step 1. Create your Project with Cordova
----------------

Open up a command line window, navigate to your projects folder and type :

> &gt; npm install -g cordova

[image of cordova install]

Next, navigate to your projects folder and create a new cordova project with android support:

> &gt; cordova create magnetometer my.magnetometer magnetometer
> &gt; cd magnetometer
> &gt; cordova platform add android

[image of cordova project creation]

If all goes well, this should have created a bunch of files and folders (ie a project structure) within your 'magnetometer' project folder, you should be able to see them using a file explorer:

[image of file explorer]

The folder 'www' contains our web code. Here is where we'll be placing the index.html file that we downloaded before.

[image of www folder in explorer]

Go back to the command line and run an extra couple of commands to 'unlock' the vibration and magnetometer functionality on your phone.

> &gt; cordova plugin add cordova-plugin-vibration
> &gt; cordova plugin add cordova-plugin-magnetometer

[image of plugin additions cmd]

Next we are going to 'build' the app, so you can use it on your android phone. We need one more cordova command to 'prepare' the app:

> cordova prepare

[image of cordova prepare cmd]

Then follow these instructions:

1. Open Android Studio
2. On the Welcome Prompt. Select 'Import Project'
3. Click on the 'platforms\android' folder inside your project.
4. Press 'OK'.
5. Press 'OK' again if you get an extra prompt about Gradle settings.
6. Wait for the progress bar to finish.

[image of android studio welcome]

[image of import project step]

This will create an android project, next we will build the APK file that can be used to run the magnetometer app on your phone. 

Make sure you've waited until all the progress bars are finished before the next steps.

1. Android Studio will want to get all required Java libraries that the project depends on. Wait until all progress bars are finished and the project files are ready.
2. Click on the 'Play' button at the top menu as per screen below. 
3. This will trigger a build using Gradle. You can see the progress on the 'Gradle Console' window.
4. When ready, a popup will appear asking if you want to run the emulator. DO NOT press OK here. It will grind your computer to a halt. Just press 'Cancel' on the popup.
 
[image of android studio build]

Next we are going to email ourselves the completed app.

1. Navigate to your 'magnetometer' project folder using the file explorer.
2. Click 'platforms' -> 'android' -> 'build' -> 'outputs' -> 'apk'
3. Find the file 'android-debug.apk'
 
[image of apk export dir]

4. Next. Email it to yourself.
5. Go to your Android phone.
6. Open 'Settings' > 'Security'
7. Turn ON 'Unknown Sources' (you can turn it back OFF later)
8. Open your email, click on the attached 'APK' file.
9. You should then get an installation screen as per below.

[image of android install]

10. Go to your Apps and look for 'magnetometer', then open it.
11. READY! Start finding some metal objects!

[image of metal detector]
