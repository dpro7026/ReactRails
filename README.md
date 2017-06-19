# README
Add Youtube functionality
Use React.JS with JSX
Add responders

<% @videos = Yt::Collections::Videos.new %>
<%= @videos.where(q: 'PSY', order: 'viewcount').first.title %>

https://github.com/Fullscreen/yt/blob/master/YOUTUBE_IT.md
