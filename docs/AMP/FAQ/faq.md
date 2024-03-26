---
sidebar_position: 10
---

# Community Support FAQ

Welcome to the Cubecoders FAQ. This will hopefully help you out with the most asked questions and problems that has been asked on the Discourse and on Discord. This post is made by a community member (ssfdre38).

:::note

Please note that is a Work in Progress FAQ for support and more will be added later.

:::

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

## I Got X License and want to switch it to Y License that I just purchase.

When you get the key there will be 2 things to do. First on the panel, go to `Configuration > New Instance Defaults` and add the new key and press reactivate all button. Second thing is on the command side of things.
For Linux it's,
```bash
sudo su -l amp
```
to go to the amp user then you will do
```bash
ampinstmgr stop ADS01
```
and then,
```bash
ampinstmgr reactivate ADS01 license
```
but replace where it says license with your new one and then,
```bash
ampinstmgr start ADS01
```
and that will be the full process for Linux.

For windows, you will go to services.msc and stop `AMP - ADS01` and then in cmd
```bash
ampinstmgr reactivate ADS01 license
```
and go back to services.msc and start`AMP - ADS01` and you should be good to go.

## How do I install Docker?

For Docker post install on AMP, you will go to [Cubecoders Discourse](https://discourse.cubecoders.com/t/configuring-amp-to-use-docker-for-instances/1957/1) and follow how to install per operating system.

## How can I add someone else's Repo to my AMP?

For this, you would go to `Configuration > Instance Deployment` and then you will see a box called `Configuration Repositories` and then you will press the + button and there a box will pop-up and there you would add the repo like this `CubeCoders/AMPTemplates` and if they have a different branch then you will do something like this `CubeCoders/AMPTemplates:dev`

## How can I setup HTTPs for my AMP Panel?

We have a great KB for this at this link [https://discourse.cubecoders.com/t/setting-up-secure-http-https-with-amp/2305/1](https://discourse.cubecoders.com/t/setting-up-secure-http-https-with-amp/2305/1)

## How can I Suggest a game to be added to AMP?

You can go to [Cubecoders Github](https://github.com/CubeCoders/AMPTemplates) and request for someone to see if they can make it. You can also try and make it yourself by using [Online Configuration Tool](https://iceofwraith.github.io/GenericConfigGen/).

## License Failed to email

For this you would need to check your spam/junk folder and if you are using PayPal to send your payment, then check all email address attached to that account. You can also try and login to https://cubecoders.com/account and see if you can login to get a new email for your key. If you can not do any of these, then you will need to email `contact@cubecoders.com` from the email address that you sent the payment from.

## How can I Java on AMP?

Cubecoders Recommends using [Temurin Java](https://adoptium.net/temurin/) for AMP. Once installed, you would stop the instance that is going to use java and then start it back up.