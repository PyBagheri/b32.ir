---
title: آرشیو
label: Archives

# The Archives of posts.
# v2.0
# https://github.com/cotes2020/jekyll-theme-chirpy
# © 2017-2019 Cotes Chung
# MIT License
---

<div id="archives" class="pl-xl-2">
{% for post in site.posts %}
  {% capture this_year %}{{ post.jdate.year.fa }}{% endcapture %}
  {% capture pre_year %}{{ post.previous.jdate.year.fa }}{% endcapture %}
  {% if forloop.first %}
    {% assign last_day = "" %}
    {% assign last_month = "" %}
  <span class="lead">{{this_year}}</span>
  <ul class="list-unstyled">
  {% endif %}
    <li>
      <div>
        {% capture this_day %}{{ post.jdate.day }}{% endcapture %}
        {% capture this_month %}{{ post.jdate.month.name }}{% endcapture %}
	<span class="archives-dm-container">
	        <span class="date day">{{ this_day | replace: "0","۰" | replace: "1","۱" | replace: "2","۲" | replace: "3","۳" | replace: "4","۴" | replace: "5","۵" | replace: "6","۶" | replace: "7","۷" | replace: "8","۸" | replace: "9","۹" }}</span>
	        <span class="date month small text-muted">{{ this_month }}</span>
	</span>
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
      </div>
    </li>
  {% if forloop.last %}
  </ul>
  {% elsif this_year != pre_year %}
  </ul>
  <span class="lead">{{pre_year}}</span>
  <ul class="list-unstyled">
    {% assign last_day = "" %}
    {% assign last_month = "" %}
  {% endif %}
{% endfor %}
</div>
