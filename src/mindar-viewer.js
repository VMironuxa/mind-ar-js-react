import React, { useEffect, useRef } from "react";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";

export default () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener("renderstart", () => {
      arSystem.start(); // start AR
    });
    return () => {
      arSystem.stop();
    };
  }, []);

  return (
    <a-scene
      ref={sceneRef}
      mindar-image="imageTargetSrc:https://storage.yandexcloud.net/zrenie-dev-bucket/%D0%A2%D0%B5%D1%81%D1%82%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D0%BC%D0%BE/targets.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;"
      color-space="sRGB"
      embedded
      renderer="colorManagement: true"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <img
          id="card"
          src="https://storage.yandexcloud.net/zrenie-dev-bucket/%D0%A2%D0%B5%D1%81%D1%82%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D0%BC%D0%BE/%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BA%D0%B0.png"
        />
        <a-asset-item
          id="avatarModel"
          rotation="0 180 0"
          position="0 0 0"
          scale="0.01 0.01 0.01"
          src="https://storage.yandexcloud.net/zrenie-dev-bucket/%D0%A2%D0%B5%D1%81%D1%82%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D0%BC%D0%BE/3d/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <a-camera position=" 0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane
          src="#card"
          position="0 0 0"
          height="1"
          width="1"
          rotation="0 0 0"
        ></a-plane>
        <a-gltf-model
          src="#avatarModel"
          rotation="90 0 0 "
          // scale="10 10 10"
          animation="property: position; to: 0.1; dur: 1000; loop: true; dir: alternate"
        ></a-gltf-model>
      </a-entity>
    </a-scene>
  );
};
