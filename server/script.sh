#!/bin/bash
mkdir $1 
cd $1
git init --bare
git push http://localhost:7005/$1 master