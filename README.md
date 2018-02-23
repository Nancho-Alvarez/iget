# iget
Get images from internet using different search engines

Usage: **iget** [**-a**] [**-g**|**-y**|**-b**|**-d**] [**-l**] [**-i**] [**-r**] [**-f**#] [**-m**#]  *search* *terms* ...

## Installation

Just give execute permission to the file **iget** and put in somewhere in your $PATH.


## Options:

**-a** Animated gifs

**-g** Use Google search engine (default)

**-y** Use Yahoo search engine

**-b** Use Bing search engine

**-d** Use DuckDuckGo search engine

**-l** Only print the URLs, do not download

**-i** Print the index number in front of the URL

**-r** Save the images using their real name instead of the default behaviour.

**-f**#  Fist image to download. # is a number between 0 and 999. Only available in Bing and DuckDuckGo

**-m**#  Maximum number of images to download. # is a number between 1 and 100. The actual number of images can be smaller.


## Examples:

**iget dog cat**

Download images of dogs and cats

**iget -a kitten**

Download animated gifs of little cats

**iget -y dog**

Download images of dogs using Yahoo search engine

**iget -l landscape**

Get the URLs or images of landscapes but do not download them

**iget -b -f100 flowers**

Download images of flowers using Bing search engine starting at image number 100

**iget -d -m2 horse**

Get only two images of horses using DuckDuckgo

**iget -r trees**

Save the images using their real filename

### More examples

**iget**

See usage

**iget '"dogs and cats"'** 

Search for the exact phrase "dogs and cats"

**iget beach 2> /dev/null**

Suppress messages generated by wget

**iget -i mountain hd > list.txt**

Download images of mountains in high definition and create a numbered list of URLs in the file list.txt


