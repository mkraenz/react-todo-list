Kubernetes.io on   Kubernetes on AWS:
https://kubernetes.io/docs/setup/production-environment/turnkey/aws/

CHOICES:
- different manged Kubernetes (Google Cloud / AWS / AZURE ...)

- Kubernetes Operations   x
- conjure-up
- CoreOS Tectonic
- KubeOne 


Following Abstraction from fully Managed to Custom are possible on different providers
https://kubernetes.io/docs/setup/#production-environment

Costs example comparison different cloud providers and managed or not:
https://www.replex.io/blog/the-ultimate-kubernetes-cost-guide-aws-vs-gce-vs-azure-vs-digital-ocean


Interesting post from reddis ( RECOMMENDED Kubenrnetes Deployment)
https://www.reddit.com/r/devops/comments/8d0bo8/recommended_way_for_deploying_kubernetes_on_aws/


----------->> DECISION ---> Try out/run  Kubernetes Operations 
Reasons: 
- cheapest solution with some cloud providers (Digital Ocean)
- learning about Master Nodes (more possibilities)
- we can try out to migrate to fully managed and check out difficulties 
- many companies will use Koops right now and are willing to migrate to a managed service 
- no lock to a certain cloud provider

https://github.com/kubernetes/kops
https://github.com/kubernetes/kops/blob/master/docs/aws.md

---------------------------
---------------------------



Testing Locally (alternativ to minikube):
https://github.com/kubernetes-sigs/kind
