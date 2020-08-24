# AtCoder Beginner Contest 108
## D - All Your Paths are Different Lengths
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int l;
    cin >> l;

    int n = 1;
    while ((1 << n) <= l) {
        n++;
    }

    vector<int> a(0), b(0), c(0);
    for (int i = 0; i < n - 1; i++) {
        a.push_back(i);
        b.push_back(i + 1);
        c.push_back(0);

        a.push_back(i);
        b.push_back(i + 1);
        c.push_back(1 << i);
    }

    for (int i = n - 2, j = l; i >= 0; i--) {
        if ((1 << (n - 1)) + (1 << i) <= j) {
            a.push_back(i);
            b.push_back(n - 1);
            c.push_back(j - (1 << i));
            j -= (1 << i);
        }
    }

    int m = a.size();

    cout << n << " " << m << endl;
    for (int i = 0; i < m; i++) {
        cout << a[i] + 1 << " " << b[i] + 1 << " " << c[i] << endl;
    }
}
```
