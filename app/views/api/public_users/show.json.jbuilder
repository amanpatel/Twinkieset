json.extract! @owner, :id, :email, :username, :business_name, :website, :avatar

json.albums @albums.each do |album|
  json.extract!(album, :id, :title, :event_date, :status, :created_at, :updated_at)

  json.password album.password ? true : false
  time = Time.parse(album.event_date.to_s)
  json.string_date time.strftime("%B #{time.day.ordinalize}, %Y")

  if album.cover_image
    json.cover_image_med album.cover_image.medium_url
  else
    json.cover_image_med 'http://res.cloudinary.com/twinkieset/image/upload/c_fit,w_1000/v1434583156/Screen_Shot_2015-06-17_at_4.18.43_PM_uptlhi.png'
  end
  
  json.first_subalbum_id album.subalbums.first.id
end
