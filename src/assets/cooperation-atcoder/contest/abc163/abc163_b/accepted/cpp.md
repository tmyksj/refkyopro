# AtCoder Beginner Contest 163
## B - Homework
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    long long n, m;
    cin >> n >> m;

    vector<long long> a(m);
    for (int i = 0; i < m; i++) {
        cin >> a[i];
    }

    cout << max(-1LL, n - accumulate(a.begin(), a.end(), 0LL)) << endl;
}
```
