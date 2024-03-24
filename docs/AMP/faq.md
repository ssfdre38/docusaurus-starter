---
sidebar_position: 10
---

# Community Support FAQ

Welcome to the Cubecoders FAQ. This will hopefully help you out with the most asked questions and problems that has been asked on the Discourse and on Discord. This post is made by a community member (ssfdre38).

## Help, I can't update my AMP Server. It's Stuck on version x.x.x.x

This is one of the most common questions we get asked on the support side all the time. Your AMP install is stuck on an older version of AMP and you can not update it. Don't worry this secion will be here to help you out.

Linux Users.

For Linux users, it't really easy to get you going to the new version of AMP.
The first thing you need to do is to update your system. For Debian/Ubuntu based systems it's

```bash
sudo apt update && sudo apt upgrade -y
```
and then you will go to the amp user with,

```bash
sudo su -l amp
```
and then you will run this command,

```bash
ampinstmgr upgradeall
```

"But It's giving me a 404 error when I try to update the system."
That's fine as its a one line fix in the root user.

```bash
sudo su -l
```
All you need to do is just run this one command,

```bash
bash <(wget -qO- getamp.sh) addRepo
```
And this will get you the new Cubecoders Repo and then follow the steps above.

Windows Users.

For Windows 10/11 and Windows Server users all you need to do it go to https://cubecoders.com/AMP/Install and select on the Windows Icon and what type you are using and redownload the [AMPSetup.msi](https://downloads.cubecoders.com/AMP/Mainline/AMPSetup.msi) and install it. Do not uninstall it as that can mess it up and then go to CMD and type,

```bash
ampinstmgr upgradeall
```
And you should be up to date

Now some users will be on the LTS (Long Term Support) of amp and my be stuck on 2.4.4.0 version of amp and for that it's a 2 commands to type with the first one to take you from LTS to Mineline,

```bash
ampinstmgr switchall mainline true
```
And then we need to update your instances with this command,

```bash
ampinstmgr upgradeall
```

## Help, My Windows AMP Install isn't working and is giving me a blank login screen.

For this problem, it's an easy fix to do.
What you need to do is go to the Services.msc panel on windows by eather pressing WinKey+R and typing services.msc or in your Start Menu Search Bar and start typing Services.
Once that is open, you will look for `AMP - ADS01` and right click on it and go to properties and change the Startup from `Automatic` to `Automatic (Delay Start)` and Then you will need to stop it and then start it back up.
![Screenshot](./img/screenshot.137.png)