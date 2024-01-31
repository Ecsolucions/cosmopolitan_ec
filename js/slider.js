 
import ipywidgets as widgets

# Crea una lista de imágenes
images = ["image1.jpg", "image2.jpg", "image3.jpg"]

# Crea un slider con un rango de 0 a len(images) - 1
slider = widgets.IntSlider(min=0, max=len(images) - 1)

# Crea una etiqueta que contenga la imagen actual
image_label = widgets.Label(value="")

# Agrega la etiqueta al slider
slider.add_widget(image_label)

# Escucha los eventos del slider
slider.observe(lambda event:
    # Actualiza la etiqueta con la imagen actual
    image_label.value = images[slider.value]
)

# Muestra el slider
display(slider)

# Agrega las imágenes al slider
for image in images:
    image_tag = widgets.Image(value=image)
    slider.add_widget(image_tag)
