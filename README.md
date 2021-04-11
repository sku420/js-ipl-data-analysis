# data-project-web

This project is the WEB version of the [Ruby Data Project](https://gitlab.com/mountblue/cohort-15-ruby/saurabh_upadhyay/ruby-data-project).
All the plotting is being done using [Highcharts](https://www.highcharts.com/demo).

### This project is hosted at the following URL:

:point_right: **visit [IPL Data Project](https://ipl-data-project-web.herokuapp.com/)**

```js
https://ipl-data-project-web.herokuapp.com/
```

### Dataset

* IPL Dataset from [Kaggle.](https://www.kaggle.com/manasgarg/ipl/version/5)

* Umpires Dataset from [Wikipedia.](https://en.wikipedia.org/wiki/List_of_Indian_Premier_League_umpires)

:point_right: All the datasets are included in this repository.

### 1. ruby_files

This directory contains all the ruby program that are used to generate the required JSON files.

* Ruby version used for this project is ``` 3.0.0 ```

* All the dependencies and required gems are included in gemfile, just run the following command in the project directory to install them.

```ruby
bundler install
```

### Command to run ruby program

```ruby
ruby app.rb
```

### 2. jsonFiles

This directory have all the required JSON files produced as output of ruby programs.

### 3. web

This directory have HTML, CSS, JS files that are used to plot the charts.
