now=$(date +'%Y%m%d-%H%M%S')
#tar -zcvf ../candy-chat$now.tgz --exclude=dist/adodb5 --exclude=dist/spa --exclude=dist/candy2 src quasar.conf.js dist
#cd frontend
tar -zcvf ../dashboard-lira-$now.tgz --exclude-from=.gitignore .
#cd backend
#tar -zcvf ../dashboard-lira-backend-$now.tgz --exclude=borrar .
