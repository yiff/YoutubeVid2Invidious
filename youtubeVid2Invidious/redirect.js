function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  let mirror = "https://yewtu.be/watch?v=";
  if (item.mirror) {
    mirror = item.mirror;
  }

  waitFor(_ => window.location.href.includes("youtube.com/watch?v=") === true)
    .then(_ => window.location = mirror + window.location.href.split("/watch?v=")[1]);

  function waitFor(conditionFunction) {

    const poll = resolve => {
      if(conditionFunction()) resolve();
      else setTimeout(_ => poll(resolve), 400);
    }
  
    return new Promise(poll);
  }
}

const getting = browser.storage.sync.get("mirror");
getting.then(onGot, onError);
