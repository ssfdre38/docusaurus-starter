---
sidebar_position: 2
---

# How to migate your AMP Server from one server to another.

:::info
This section is for Linux based installs of AMP. Windows version of AMP is down below.
:::

## Stopping AMP and all Instances.

The first thing that you want to do on the server that you want to move your AMP from is to stop all the instances and AMP itself by these following commands.

```bash
sudo su -l amp
ampinstmgr stopall
exit
sudo systemctl stop ampinstmgr
sudo su -l amp
```
This will stop all your game servers, intances and ampinstmgr itself and put you back as the amp user.

Now you will zip or copy the .ampdata folder.

## Moving to the new server.

:::note
This is going to be done on your NEW server
:::

:::info
Make sure you have access to your AMP License Key for this next step
:::

Now you will setup your new server with amp by follow the same steps that are in [Cubecoders AMP Install Page](https://cubecoders.com/AMP/Install) by running this command

```bash
bash <(wget -qO- getamp.sh)
```
And follow all the steps that you would normally do when setting up AMP.

Once done you will do these following commands

:::info
This is just an example if your .ampdata folder is in the root `/root` directory.
:::

```bash
sudo su -l amp
ampinstmgr stopall
exit
sudo systemctl stop ampinstmgr
sudo su -l amp
rm -r .ampdata
exit
sudo cp /root/.ampdata /home/amp
sudo chown amp:amp -r /home/amp/.ampdata
sudo systemctl start ampinstmgr
sudo su -l
ampinstmgr fixperms
sudo su -l amp
ampinstmgr reactivateall `yourlicensekey`
ampinstmgr upgradeall
ampinstmgr startall
```

Now this will get your .ampdata moved from what folder you have it in before installing amp and fixing the permissions for the .ampdata folder and reactivating your license for amp and update all the instances and docker containers if using docker.

Now if you have setup any extra AMP Datastore, you will need to also move them over and set them back up as they were on the old server
The steps will be the same as above but paths will be different.


## Windows Migration of AMP.

Now for Windows versions of AMP, you will need to stop all of the instances with the following command in CMD non-admin

```bash
ampinstmgr stopall
```

Then you will need to go to the task manager and stop all the program with amp.

Now you will find that your AMPDatastore will be on the biggest drive on your computer so if your biggest dirve is the C:\ drive then it's `C:\AMPDatastore`.

## New Windows Install of AMP

:::info
This is on the new install of your Windows Server
:::

Now you will install AMP as the normal way by getting the AMPSetup.MSI file from [Cubecoders AMP Install Page](https://cubecoders.com/AMP/Install) and set it up as is. Now it is recommended to install it like how you had it with your old install of amp.

Now when you are done installing and setting up AMP, you will need to stop AMP with the following in CMD

```bash
ampinstmgr stopall
```
Then in Servcies.msc, you will look for `AMP - ADS01` and you will need to stop that from running.
Now you will need to delete it the AMPDatastore folder from where it was setup on so it can be `C:\AMPDatastore` and then you will need to copy your old folder over to the new location.

Once it's fully copied over, you will need to run this command in ADMIN CMD.
```bash
ampinstmgr fixperms
```
Once this is ran, you should restart your Window System to get AMP fully back up and running. After restart you should run these commands

```bash
ampinstmgr reactivateall `yourlicensekey`
ampinstmgr upgradeall
```
This will get your AMP license back on your system and update any and all instances that use docker containers.