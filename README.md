This can be used as an example app to generate traffic.

It does a fetch request to a custom URL every second in `./app.js`.

You can build this app yourself by changing the tag here and in the deployment and running the following:

```
export IMAGE_NAME=docker_username/example-fetching-app
```

```
docker build -t $IMAGE_NAME && \
docker push $IMAGE_NAME && \
kubectl apply ./kubernetes/namespace.yaml && \
cat ./kubernetes/deployment.yaml | \
    envsubst | \
    kubectl apply -f -
```
