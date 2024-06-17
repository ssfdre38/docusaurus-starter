---
sidebar_position: 2
---

# How to migate your AMP Server from one server to another.

:::info
This is just for Linux based systems only. It's not recommended for Windows Based systems.
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
sudo systemctl start ampinstmgr
sudo su -l
ampinstmgr fixperms
sudo su -l amp
ampinstmgr reactivateall `yourlicensekey`
ampinstmgr upgradeall
ampinstmgr startall
```

Now this will get your .ampdata moved from what folder you have it in before installing amp and fixing the permissions for the .ampdata folder and reactivating your license for amp and update all the instances and docker containers if using docker.
