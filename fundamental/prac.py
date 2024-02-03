import folium

# Create a map centered at a specific location
my_map = folium.Map(location=[0, 0], zoom_start=2)

# Function to handle marker clicks and print the coordinates
def on_map_click(e):
    lat, lon = e.latlng
    print(f"Latitude: {lat}, Longitude: {lon}")

# Add a click event to the map to get the coordinates
my_map.add_child(folium.LatLngPopup())

# Set a click event to the map that triggers the on_map_click function
my_map.add_child(folium.ClickForMarker(popup="Click me!", callback=on_map_click))

# Save the map to an HTML file or display it
my_map.save("map_with_coordinates.html")
