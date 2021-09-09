import React, {Component} from 'react';

class Banner extends Component {

    constructor() {
        console.log("menu constructor");
        super();
    }
    componentDidMount() {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0800147848250371";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    render() {
      return (
      <ins class="adsbygoogle"
          style={{display:'block'}}
          data-ad-client="ca-pub-0800147848250371"
          data-ad-slot="9515519754"
          data-ad-format="auto"
          data-full-width-responsive="true">
      </ins>
      )
      }
}

export default Banner;