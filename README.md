# CIS 273 GROUP A 
# README

This repository contains the code for the JC CIS 273 group A final project, a website
featuring the following functionality:  A browser game, a login system, a forum, a 
registration system, a scoring engine, and accompanying styling.

===============================

ATTENTION:

The following steps should be taken to fully prepare this project for testing / implementation:

A MySQL database should be created, and imported with the seeder dummy data and appropriate
tables / columns found in the /SQL directory.

A file MUST be created called mysqlCredentials.php that will be stored in the /PHP directory.
It should have the following variables: $db (database), $un (mysql username), $pass (mysql password)
and $host (mysql host server).  This file is untracked and gitignored, so it must be done manually if
the user has pulled from our github.

Some features, like our email registration, only work on our dev site.  You can log emails to test
functionality locally if you'd like.