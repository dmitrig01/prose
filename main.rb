require 'sinatra'
require 'rdiscount'

set :public_folder, File.dirname(__FILE__)
set :port, 80

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

post "/marked" do
  request.body.rewind  # in case someone already read it
  markdown = RDiscount.new(request.body.read)
  markdown.to_html
end
