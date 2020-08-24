# AtCoder Beginner Contest 127
## D - Integer Cards
```cpp
#include <algorithm>
#include <iostream>
#include <map>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    map<long long, int> a;
    for (int i = 0; i < n; i++) {
        int aa;
        cin >> aa;
        a[aa]++;
    }

    for (int i = 0; i < m; i++) {
        int b;
        long long c;
        cin >> b >> c;

        for (map<long long, int>::iterator j = a.begin(); j != a.end() && j->first < c; ) {
            if (j->second <= b) {
                b -= j->second;
                a[c] += j->second;
                j = a.erase(j);
            } else {
                j->second -= b;
                a[c] += b;
                b = 0;
                break;
            }
        }
    }

    long long sum = 0;
    for (map<long long, int>::iterator i = a.begin(); i != a.end(); i++) {
        sum += i->first * i->second;
    }

    cout << sum << endl;
}
```
