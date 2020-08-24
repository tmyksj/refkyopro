# AtCoder Beginner Contest 171
## D - Replacing
```cpp
#include <iostream>
#include <map>

using namespace std;

int main() {
    int n;
    cin >> n;

    long long s = 0;
    map<long long, long long> m;
    for (int i = 0; i < n; i++) {
        long long a;
        cin >> a;

        s += a;
        m[a]++;
    }

    int q;
    cin >> q;

    for (int i = 0; i < q; i++) {
        long long b, c;
        cin >> b >> c;

        s += c * m[b] - b * m[b];
        m[c] += m[b];
        m[b] = 0;

        cout << s << endl;
    }
}
```
