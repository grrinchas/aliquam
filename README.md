
![aliquam rwd](/demo.jpg)

# aliquam

Want example? [check this out](http://grrinchas.github.io/aliquam/)

Want real life example? [check this out](http://grrinchas.github.io/)



## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [License](#license)



## <a name="features"></a>Features

- [Disqus](https://disqus.com/) comment system
- Google analytics
- Pagination support
- Custom tags and categories
- SEO support
- Contact form integration
- MathJax support

## <a name="installation"></a>Installation

#### Method 1: new master's repository (The Best)

1. First [fork](https://github.com/grrinchas/aliquam/fork) it.
2. Change your forked repository name _aliquam_ to __userName.github.io__ where
   __userName__ is your github user name.
3. Access your new blog via [https://username.github.io](https://username.github.io).
4. [See configuration](#configuration).

#### Method 2: gh-pages in existing repository
1. Create a new branch called _gh-pages_ in the repository where you want to add a template [managing branches](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/).
2. From command line run `git clone https://github.com/grrinchas/aliquam` - this will clone _aliquam_ template to your computer.
3. Create new branch `git checkout -b gh-pages` where _gh-pages_ will be your branch name.
4. Add remote, which is your repo from the first step, to your new branch `git remote add gh-pages https://github.com/<yourName>/<yourMaster>/gh-pages`. _yourName_ is your account name and _yourMaster_ is your repository.
5. Push new branch to remote `git push gh-pages`.
6. Update `_config.yml` file by changing `baseurl: "<branchName>"` _branchName_ is your branch name where _gh-pages_ resides. See [configuration](#configuration).

#### Method 3: run it locally

1. Download [zip](https://github.com/grrinchas/aliquam/archive/master.zip) or clone it `git clone https://github.com/grrinchas/aliquam`.
2. Go inside folder and run `jekyll serve` or `bundle exec jekyll s`. This will build a website which you can access [https://localhost:4000](https://localhost:4000). You need to have [Jekyll](https://jekyllrb.com/docs/installation/) installed to do this.

## <a name="configuration"></a>Configuration

All configuration is done via `_config.yml` file which you will find in your main repo folder.

- `url: "https://<yourName>.github.io"` - Change this to your domain (need for Disqus integration). !NOTE if running locally change this to `url: "https://localhost:4000"`.
- `disqus: "<disqusName>"` - Your disqus name. First you have to create account with [Disqus](https://disqus.com/).
- `owner: "<name surname>"` - Change this to your own name, need for copyright in the footer.
- `title: "<title>"` and `subtitle: "<subtitle>"` Change to your preferred title/subtitle.
- `baseurl: "/<branchName>"` - Change this to your branch name where _gh-pages_ resides. !NOTE apply only if you used __Method 2__ for installation.
- `google_analytics: <your_ID>` - Change this to your google analytics ID.
- `contact_PK: <yourPublicKey>` - Change this to your [http://getsimpleform.com](http://getsimpleform.com) public key.
- `math: true` - set `false` to disable maths support. For more information check [MathJax](https://www.mathjax.org/).

To get your public key:

1. Got to [http://getsimpleform.com](http://getsimpleform.com).
2. Enter your email and press `Send me a token`.
3. Go to your email and copy your token `Your form api token is <token>`. !NOTE do not copy your private key.
4. Paste this key to `contact_PK` in `_config.yml`.
5. Every time when someone sends you a message you will receive a notification to your email.

## <a name="license"></a>License

This project is licensed under the MIT License - see [The MIT License (MIT)](https://opensource.org/licenses/MIT)
for more details.
