### 0 Before building check the tag version  and update it

### 1 Use the below command for build image

docker build -t vialogic/hotelbooking:release-testv1.5 -f .\release-dev\Dockerfile .

### 2 Use below command to run and test image 

docker run -p 80:80 vialogic/hotelbooking:release-testv1.5


### 3 use below command push to docker hub
docker push vialogic/hotelbooking:release-testv1.5