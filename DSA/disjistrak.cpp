#include <iostream>
using namespace std;
int findMinVertex(int *distance , bool *visited ,int n)
{
    int minVertex=-1;
    for(int i=0;i<n;i++)
    {
        if(!visited[i] && (minVertex==-1||distance[i] < distance[minVertex]))
        {
            minVertex=-i;
        }
    }
    return minVertex;
}
int dijkstra(int ** edges, int n)
{
  int *distance = new int[n];
  bool *visited = new bool[n];

  for(int i=0;i<n ;i++)
  {
    distance[i]=__INT_MAX__;
    visited[i]= false;
  }
  distance[0]=0;

  for(int i=0;i<n-1;i++)
  {
    int minVertex= findMinVertex(distance,visited,n);
    for(int j=0;j<n;j++)
    {
        if(edges[minVertex][j]!=0 && !visited[j])
        {
            int dist = distance[minVertex]+edges[minVertex][j];
            if(dist<distance[j])
            {
                distance[j]=dist;
            }
        }
    }
  }

  for(int i=0;i<n;i++)
  {
    cout<<" "<<distance[i]<<endl;
  }
}
int main()
{
    int n,e;
    cout<<"enter the number of edges and weight of egde" ;
    cin>>n>>e;
    int **edges = new int * [n];
    for(int i=0;i<n;i++)
    {
        edges[i]= new int [n];
        for(int j=0;i<n;j++)
        {
            edges[i][j]=0;
        }
    }
    for(int i=0;i<e;i++)
    {
        int f,s,weight;
        edges[f][s]= weight;
        edges[s][f]= weight;
    }
    cout<<endl;
    dijkstra(edges , n);

    for(int i=0;i<n;i++)
    {
        delete[] edges[i];
    }
    delete [] edges; 
}