#!/bin/bash
mkdir -p repo
cd repo
git clone http://localhost:7005/$1 
cd $1
git checkout main || git checkout master