# AtCoder Beginner Contest 132
## C - Divide the Problems
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> d(n);
    for (int i = 0; i < n; i++) {
        cin >> d[i];
    }

    sort(d.begin(), d.end());

    cout << (d[n / 2] - d[n / 2 - 1]) << endl;
}
```
