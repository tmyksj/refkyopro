# AtCoder Beginner Contest 167
## D - Teleporter
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<int> r(n, -1);
    for (int i = 0, j = 0; r[i] == -1; i = a[i] - 1, j++) {
        r[i] = j;
    }

    vector<int>::iterator s = max_element(r.begin(), r.end());
    int b = r[a[s - r.begin()] - 1];
    int c = *s - b + 1;

    cout << find(r.begin(), r.end(), (k < b ? k : (k - b) % c + b)) - r.begin() + 1 << endl;
}
```
