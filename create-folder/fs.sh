#!/bin/bash

root_directory="/home/anamul/Desktop/smartcare-react/sc-react/src/features"  # Change this to the directory where your folders are located
suffix1="-api"  # Suffix for the file names
suffix2="-slice"  # Suffix for the file names

cd "$root_directory"  # Change to the root directory containing the folders

for folder in */; do
    folder_name=$(basename "$folder")
    rm "${folder_name}/${folder_name}${suffix1}.js"
    touch "${folder_name}/${folder_name}${suffix2}.js"
done
