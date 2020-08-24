# AtCoder Beginner Contest 103
## D - Islands War
```cpp
#include <iostream>
#include <list>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<list<int>> left(n - 1);
    vector<int> cnt_right(n - 1, 0);
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        left[a - 1].push_back(b - 2);
        cnt_right[b - 2]++;
    }

    int res = 0;
    list<int> l;
    for (int i = 0; i < n - 1; i++) {
        for (list<int>::iterator j = left[i].begin(); j != left[i].end(); j++) {
            l.push_back(*j);
        }

        if (cnt_right[i] > 0) {
            res++;

            for (list<int>::iterator j = l.begin(); j != l.end(); j++) {
                cnt_right[*j]--;
            }

            l.clear();
        }
    }

    cout << res << endl;
}
```
