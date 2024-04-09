<Card 
style={{
    backgroundColor: `rgb(${initialColor}, ${opacity})`,
}}
className="m-2"
>
    <Card.Img 
    variant="top"
    style={
        imageLoaded
        ? { opacity: 1, transition: 'opacity 2s ease-in-out' }
        : { opacity: 0 }
    }
    src={image}
    alt={title}
    onLoad={() => setImageLoaded(true)}
    />
</Card>