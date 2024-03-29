---
sidebar_position: 20
---

# How to update AMP

:::note
This is a community based guide on how to update AMP on both Linux and Windows. If you need any support, Please go to the [CubeCoders Discourse](https://discourse.cubecoders.com/) or to [CubeCoders Discord](https://discord.gg/cubecoders).
:::

## Update AMP on Linux

For Linux based systems, it's very easy to update AMP.

First you will need to update your system with your Package Manager.

```bash apt
update
```
Then you will need to go to the amp user with this command

```bash
sudo su -l amp
```

Then as the amp user you will run this command

```bash
ampinstmgr upgradeall
```
That's All you need to do on linux to update your AMP Panel on Linux.

## Update AMP on Windows

For Windows Based Systems (10/11 and Server 2019-2022), It's a little different.

First thing you will need to do is to go to the [Cubecoders AMP Download](https://cubecoders.com/AMP/Install) page and redownload the [AMPSetup.msi](https://downloads.cubecoders.com/AMP/Mainline/AMPSetup.msi) Installer and install it on top of your current AMP install.

Then you will open up CMD and run this command to update all the instances.

```bash
ampinstmgr upgradeall
```
And that is all that is needed. Now it is recommended to restart your system on updates to make sure that everything is setup correctly.