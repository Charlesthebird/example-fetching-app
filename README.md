This can be used as an example app to generate traffic.

It does a fetch request to a custom URL every second in `./app.js`.

You can build this app yourself by changing the tag and context here and running the following. Make sure that you are logged in to docker with `docker login`.

```
export IMAGE_NAME=docker_username/example-fetching-app
export REMOTE_CONTEXT=your-remote-context
```

```
docker build . -t $IMAGE_NAME && \
docker push $IMAGE_NAME && \
kubectl apply --context=$REMOTE_CONTEXT -f ./kubernetes/namespace.yaml && \
cat ./kubernetes/deployment.yaml | \
    envsubst | \
    kubectl apply --context=$REMOTE_CONTEXT -f -
```
