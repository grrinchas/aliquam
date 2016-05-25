# aliquam

Minimalistic Jekyll Theme for your blog

Want example? [check this out](https://grrinchas.github.io/aliquam/)

</hr>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)



## <a name="features"></a>Features

- [Disqus](https://disqus.com/) comment system integration
- Pagination support
- Custom tags and categories

## <a name="installation"></a>Installation

#### Method 1: Github Master Repository (The Best)

1. First [Fork](https://github.com/grrinchas/aliquam/fork) it.
2. Change your forked repository name (_aliquam_) to __userName.github.io__ where
__userName__ is your github user name.
3. Access your new blog via [https://username.github.io](https://username.github.io).
4. [See configuration](#configuration).

#### Method 2: Add template to existing repository
1. Create a new branch called __gh-pages__ in the repository where you want to add a template [See managing branches](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/).
2. From command line run `git clone https://github.com/grrinchas/aliquam` - this will clone _aliquam_ template to your computer.
3. Create new branch 'git checkout -b gh-pages'. __gh-pages__ will be your branch name.
4. Add remote from the first step to your new branch `git remote add gh-pages https://github.com/<yourName>/<yourMaster>/gh-pages`. Where __yourName__ is your account name and __yourMaster__ is your repository where gh-pages branch is residing.
5. Push your new branch to your remote repo which you created in the first step `git push gh-pages`
6. Update `_config.yml` file by changing `baseurl: "<branchName>` where __<branchName>__ is your branch where _gh-pages_resides. See [configuration](#configuration).


## <a name="configuration"></a>Configuration

All configuration is done via `_config.yml` file which you will find in your main repo folder.

- `baseurl: "<branchName>"` - Change this to your branch name where gh-pages resides.
!NOTE only set tup this if you used __Method 2__ for installation.
- `url: "https://<yourName>.github.io"` - Change this to your domain (need for Disqus integration).
- `disqus: "<disqusName>"` - Your disqus name. First you have to create account with [Disqus](https://disqus.com/).
- `owner: "<name surname>"` - Change this to your own name, need for copyright in the footer.
- `title: "<title>"` and `subtitle: "<subtitle>"` Change to your preferred title/subtitle.


