import { bootstrapCameraKit } from "@snap/camera-kit";

// API TOKEN 
//GROUP ID 967302b9-f409-48d8-b310-0141b6c51425
//

(async function name() {

  const cameraKit = await bootstrapCameraKit({apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzQ0MDgxNDg1LCJzdWIiOiI3NDExZjE0ZS0xZTE3LTRlOTAtYjczYy1jYTY0Mzc2Mjk1ZDB-U1RBR0lOR34xNmYyNjlkMi1kMThmLTRlYjMtOTQxMC03YTg4MWQzZGE0OWEifQ.th4RlltfevBsm64UmHaph4YOkJ0-X9LVDKhLetZexoY'});
  const liveRenderTarget = document.getElementById ('canvas') as HTMLCanvasElement;
  const session = await cameraKit.createSession({liveRenderTarget});
  const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

  await session.setSource(mediaStream);

  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    '967302b9-f409-48d8-b310-0141b6c51425',
    '967302b9-f409-48d8-b310-0141b6c51425'
  );

  await session.applyLens(lens);

})();