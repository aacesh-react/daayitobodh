const YoutubePlayer = () => {
  let youtubeLink = "https://www.youtube.com/watch?v=PsgsmErH6LE";
  let youtubeUrl = youtubeLink.replace("watch?v=", "embed/");
  return (
    <div className="h-[500px] aspect-video">
      <iframe
        width="560"
        height="315"
        src={youtubeUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;
